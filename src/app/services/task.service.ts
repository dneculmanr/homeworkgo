import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor(private storage: StorageService) {
    this.loadTasks();
  }

  async loadTasks() {
    const tasks = await this.storage.get('homeworkgo-tasks') || [];
    this.tasksSubject.next(tasks);
  }

  async addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const newTask: Task = {
      ...task,
      id: this.generateId(),
      createdAt: new Date().toISOString()
    };
    
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = [...currentTasks, newTask];
    
    await this.storage.set('homeworkgo-tasks', updatedTasks);
    this.tasksSubject.next(updatedTasks);
  }

  async toggleTask(taskId: string) {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    
    await this.storage.set('homeworkgo-tasks', updatedTasks);
    this.tasksSubject.next(updatedTasks);
  }

  async deleteTask(taskId: string) {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.filter(task => task.id !== taskId);
    
    await this.storage.set('homeworkgo-tasks', updatedTasks);
    this.tasksSubject.next(updatedTasks);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
