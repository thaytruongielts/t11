
import React from 'react';
import { DailyPlan } from '../types';
import { ReadingIcon, WritingIcon, SpeakingIcon, ListeningIcon } from '../constants';

interface DayCardProps {
  plan: DailyPlan;
}

const getIconForTask = (task: string) => {
    const lowerTask = task.toLowerCase();
    const icons = [];
    if (lowerTask.includes('read') || lowerTask.includes('đọc')) {
        icons.push({ key: 'read', icon: <ReadingIcon className="w-5 h-5 text-blue-400" />});
    }
    if (lowerTask.includes('writ') || lowerTask.includes('viết')) {
        icons.push({ key: 'writ', icon: <WritingIcon className="w-5 h-5 text-green-400" />});
    }
    if (lowerTask.includes('speak') || lowerTask.includes('nói')) {
        icons.push({ key: 'speak', icon: <SpeakingIcon className="w-5 h-5 text-yellow-400" />});
    }
    if (lowerTask.includes('listen') || lowerTask.includes('nghe')) {
        icons.push({ key: 'listen', icon: <ListeningIcon className="w-5 h-5 text-purple-400" />});
    }
    return icons;
};

const TaskItem: React.FC<{ task: string }> = ({ task }) => {
    const icons = getIconForTask(task);
    return (
        <li className="flex items-start space-x-3">
            <div className="flex-shrink-0 pt-1 flex space-x-1">
                {icons.length > 0 ? icons.map(i => <span key={i.key}>{i.icon}</span>) : <span className="w-5 h-5 text-gray-500">-</span>}
            </div>
            <p className="text-gray-300">{task}</p>
        </li>
    )
}

const DayCard: React.FC<DayCardProps> = ({ plan }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="p-5 bg-gray-800/50 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white">Ngày {plan.day}</h3>
        <p className="text-sm text-cyan-400">{plan.date}</p>
      </div>
      <div className="p-5 space-y-4">
        {plan.lesson.length > 0 && (
          <div>
            <h4 className="font-semibold text-lg text-white mb-2">Bài học</h4>
            <ul className="space-y-2">
                {plan.lesson.map((task, index) => <TaskItem key={`lesson-${index}`} task={task} />)}
            </ul>
          </div>
        )}
        {plan.practice.length > 0 && (
          <div>
            <h4 className="font-semibold text-lg text-white mb-2">Luyện tập</h4>
            <ul className="space-y-2">
                {plan.practice.map((task, index) => <TaskItem key={`practice-${index}`} task={task} />)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayCard;
