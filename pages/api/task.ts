import axios, { baseURL } from './axios';
import { ITaskCreate, ITaskUpdate } from '../../models/task';

const endpoint = `${baseURL}task/`;

class TaskService {
  async getTasks(date: string, day: string, token: string) {
    try {
      const response = await axios.get(`${endpoint}date`, {
        withCredentials: true,
        params: {
          date,
          day,
          token
        }
      });
      return response.data;
    } catch (error) {
      return ['error'];
    }
  }

  async createTask(task: ITaskCreate) {
    try {
      const response = await axios.post(`${endpoint}`, task);
      return response.data;
    } catch (error) {
      //@ts-ignore
      throw error.response.data;
    }
  }

  async updateTask(taskId: string, newTask: ITaskUpdate) {
    try {
      const response = await axios.patch(`${endpoint}update`, {
        id: { _id: taskId },
        newTask
      });
      return response.data;
    } catch (error) {
      //@ts-ignore

      throw error.response.data;
    }
  }

  async deleteTasks(taskIds: string[]) {
    try {
      const response = await axios.post(`${endpoint}delete`, {
        ids: taskIds
      });
      console.log(response);
      return response.data;
    } catch (error) {
      //@ts-ignore
      throw error.response.data;
    }
  }

  async getHighlightForCategories(date: string) {
    try {
      const response = await axios.get(`${endpoint}stat`, {
        params: {
          date
        }
      });
      return response.data;
    } catch (error) {
      //@ts-ignore
      throw error.response.data;
    }
  }
}

export default new TaskService();
