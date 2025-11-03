
import React from 'react';
import { WeeklyPlan } from './types';

export const ReadingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.25-8.494v5.242c0 .276.224.5.5.5h4.5a.5.5 0 00.5-.5V9.253m-4.5 5.242a2.625 2.625 0 115.25 0m-5.25 0a2.625 2.625 0 105.25 0M17 6.75h.008v.008H17V6.75z" />
  </svg>
);

export const WritingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
  </svg>
);

export const SpeakingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const ListeningIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 5.636a9 9 0 0112.728 0M12 18.5a4.5 4.5 0 004.5-4.5V12a4.5 4.5 0 10-9 0v2a4.5 4.5 0 004.5 4.5z" />
  </svg>
);


export const IELTS_STUDY_PLAN: WeeklyPlan[] = [
  {
    week: 1,
    title: "Tuần 1: Làm quen và xây dựng nền tảng",
    description: "Tuần đầu tiên tập trung vào việc làm quen với cấu trúc đề thi IELTS và xây dựng nền tảng cơ bản cho cả 4 kỹ năng.",
    dailyPlans: [
      {
        day: 1,
        date: "Thứ Hai, 03/11/2025",
        lesson: ["Nói (Speaking) + Viết (Writing) + Đọc (Reading)"],
        practice: [
          "Đọc (Reading) + Nói (Speaking) + Viết (Writing)",
          "Làm thử 1 bài test Speaking và Writing trong vòng 1 tiếng 30 phút như kỳ thi thật để làm quen với cấu trúc bài thi của 2 kỹ năng trên.",
        ],
      },
      {
        day: 2,
        date: "Thứ Ba, 04/11/2025",
        lesson: [
          "Ôn luyện 2 kỹ năng Nghe và Nói",
          "Ôn Tập chủ đề mô tả người để học từ vựng và học 2 bài tùy chọn cùng chủ đề Speaking Task 2",
          "Học 2 topic tùy chọn của Speaking Task 1",
        ],
        practice: ["Listening + Speaking", "Tự luyện tập Speaking với chủ đề đã học"],
      },
      {
        day: 3,
        date: "Thứ Tư, 05/11/2025",
        lesson: [
          "Đọc (Reading) + Nghe (Listening) + Nói (Speaking)",
          "Học 3 topic tiếp theo tùy chọn của Speaking Task 1",
        ],
        practice: ["Kỹ năng Nghe và Nói", "Tự luyện tập Speaking với chủ đề đã học."],
      },
      {
        day: 4,
        date: "Thứ Năm, 06/11/2025",
        lesson: [
          "Viết (Writing) + Nói (Speaking)",
          "Xem video “Cách viết dạng bài Opinion” và phần Ôn Tập – Writing Task 2",
          "Học 3 topic tiếp theo của Speaking task 2",
          "Học 2 topic tiếp theo tùy chọn của Speaking IELTS Task 1.",
        ],
        practice: [
          "Kỹ năng Viết và Nói",
          "Tự luyện tập Speaking với chủ đề đã học.",
          "Tự luyện viết dạng bài Opinion (Writing) bằng đề thi thật tùy ý.",
        ],
      },
      {
        day: 5,
        date: "Thứ Sáu, 07/11/2025",
        lesson: ["Viết (Writing) + Nói (Speaking)", "Học 4 topic tiếp theo của Speaking Task 1."],
        practice: ["Kỹ năng Nói và Viết", "Tự luyện tập Speaking với chủ đề đã học."],
      },
    ],
  },
  {
    week: 2,
    title: "Tuần 2: Mở rộng vốn từ và phát âm",
    description: "Tuần thứ 2 cần chú trọng đến phát âm, bổ sung từ vựng và cách sử dụng các từ thành thạo để làm các bài test một cách chỉn chu nhất.",
    dailyPlans: [
      {
        day: 1,
        date: "Thứ Hai, 10/11/2025",
        lesson: ["Đọc (Reading) + Nghe (Listening)"],
        practice: [
          "Kết hợp kỹ năng Viết (Writing) và Nghe (Listening)",
          "Làm bài tập Multiple Choice 1 lựa chọn – Listening",
        ],
      },
      {
        day: 2,
        date: "Thứ Ba, 11/11/2025",
        lesson: [
          "Nói (Speaking) + Nghe (Listening)",
          "Học phần Ôn tập Mô tả một địa điểm để làm quen với từ vựng cần thiết, nghe 3 file của Speaking task 2",
          "Học 2 topic tiếp theo của Speaking task 1",
        ],
        practice: [
          "Kết hợp 2 kỹ năng Nghe và Nói",
          "Làm bài tập Multiple Choice nhiều lựa chọn – Listening",
          "Tự luyện tập kỹ năng Nói với chủ đề đã học",
        ],
      },
      {
        day: 3,
        date: "Thứ Tư, 12/11/2025",
        lesson: ["Viết (Writing) + Đọc (Reading)"],
        practice: [
          "Kỹ năng Viết (Writing) và Nói (Speaking)",
          "Tự luyện viết dạng Cause & Solution với đề thi thật.",
          "Ôn tập lại các từ vựng đã học",
        ],
      },
      {
        day: 4,
        date: "Thứ Năm, 13/11/2025",
        lesson: [
          "Dành trọn thời gian cho kỹ năng Nói (Speaking)",
          "Học 3 topic tiếp theo cùng chủ đề đang học “Mô tả một địa điểm” của Speaking Task 2",
          "Học 5 topic tiếp theo của Speaking task 1",
        ],
        practice: [
          "Kết hợp 2 kỹ năng Viết (Writing) và Nói (Speaking)",
          "Tự luyện tập Writing các dạng đã học với đề thi thật",
          "Tự luyện tập Speaking với chủ đề đã học",
        ],
      },
      {
        day: 5,
        date: "Thứ Sáu, 14/11/2025",
        lesson: [
          "Nói (Speaking) + Viết (Writing)",
          "Học phần ôn tập chủ đề mô tả sự kiện trong quá khứ để làm quen với từ vựng cần thiết và nghe 3 file với chủ đề liên quan – Speaking IELTS task 2",
        ],
        practice: [
          "Kết hợp kỹ năng Nói và Viết",
          "Tự luyện Speaking với chủ đề đã học",
          "Tự luyện Writing dạng 2 Part Question với đề thi thật",
        ],
      },
      {
        day: 6,
        date: "Thứ Bảy, 15/11/2025",
        lesson: [
          "Nói (Speaking) + Đọc (Reading)",
          "Học 5 topic tiếp theo của Speaking Task 1",
          "Học 2 topic tiếp theo cùng chủ đề đang học của Speaking task 2",
        ],
        practice: [
          "Kết hợp ôn luyện 3 kỹ năng Đọc, Nói và Nghe",
          "Làm 1 đề Reading và Listening trong IELTS Cambridge 8",
          "Tự luyện Speaking với chủ đề đã học",
        ],
      },
    ],
  },
  {
    week: 3,
    title: "Tuần 3: Luyện tập chuyên sâu",
    description: "Bạn đã đi được nửa chặng đường. Tuần thứ 3 của tháng, bạn nên ôn thi IELTS một cách chuyên sâu vào các kỹ năng để nâng cao band điểm.",
    dailyPlans: [
      {
        day: 1,
        date: "Thứ Hai, 17/11/2025",
        lesson: ["Nghe (Listening) + Đọc (Reading)"],
        practice: [
          "Kết hợp kỹ năng Nghe và Đọc trong một ngày",
          "Làm bài tập Matching Listening",
          "Làm 1 test Reading và Listening trong IELTS Cambridge 8",
        ],
      },
      {
        day: 2,
        date: "Thứ Ba, 18/11/2025",
        lesson: [
          "Viết (Writing) + Nói (Speaking)",
          "Học 3 topic tiếp theo của Speaking task 1",
          "Học phần ôn tập Mô Tả một đối tượng và nghe 2 file cùng chủ đề – speaking task 2",
        ],
        practice: [
          "Kết hợp kỹ năng Viết và Nói",
          "Tự luyện Speaking với chủ đề đã học",
          "Tự luyện Writing dạng line graph và bar chart với đề thi thật",
        ],
      },
      {
        day: 3,
        date: "Thứ Tư, 19/11/2025",
        lesson: [
          "Ôn luyện 3 kỹ năng Đọc (Reading) + Nghe (Listening) + Nói (Speaking)",
          "Học 4 topic tiếp theo của Speaking task 1",
        ],
        practice: ["Kết hợp kỹ năng Đọc và Nghe", "Làm 1 test Reading và Listening trong IELTS Cambridge 8"],
      },
      {
        day: 4,
        date: "Thứ Năm, 20/11/2025",
        lesson: [
          "Nói (Speaking) + Viết (Writing)",
          "Học 3 topic tiếp theo cùng chủ đề của IELTS Speaking task 2",
        ],
        practice: [
          "Kết hợp kỹ năng Nói và Viết",
          "Tự luyện viết Writing Task 1 dạng Pie chart",
          "Tự luyện speaking với các chủ đề đã học",
        ],
      },
      {
        day: 5,
        date: "Thứ Sáu, 21/11/2025",
        lesson: [
          "Nói (Speaking) + Viết (Writing)",
          "Học 3 topic tiếp theo của Speaking task 1 và 3 file cùng chủ đề đang học của Speaking task 2",
        ],
        practice: [
          "4 kỹ năng Nghe, Nói, Đọc, Viết",
          "Làm 1 test Reading và Listening trong IELTS Cambridge 9",
          "Tự luyện speaking với chủ đề đã học.",
          "Tự luyện writing task 1 dạng Table với đề thi thật.",
        ],
      },
      {
        day: 6,
        date: "Thứ Bảy, 22/11/2025",
        lesson: ["Viết (Writing)"],
        practice: [
          "Kết hợp 3 kỹ năng Viết (Writing) + Đọc (Reading) + Nghe (Listening)",
          "Làm 1 test Reading và Listening trong IELTS Cambridge 9",
          "Tự luyện writing task 1 dạng bài Process",
        ],
      },
    ],
  },
  {
    week: 4,
    title: "Tuần 4: Tổng duyệt và tối ưu hóa",
    description: "Giai đoạn cuối cùng để tiếp cận mức điểm mục tiêu. Tập trung luyện đề, cập nhật các dạng bài thi và tìm hiểu các tips làm bài để đạt được điểm cao.",
    dailyPlans: [
      {
        day: 1,
        date: "Thứ Hai, 24/11/2025",
        lesson: [
          "Viết (Writing) + Nói (Speaking)",
          "Học 2 topic tiếp theo của speaking task 1",
          "Học 3 topic tiếp theo tùy chọn của speaking task 2",
        ],
        practice: [
          "4 Kỹ Năng trong IELTS",
          "Làm 1 test Reading (Đọc) và Listening (Nghe) trong IELTS Cambridge 9",
          "Tự luyện writing IELTS task 1 dạng Map",
          "Tự luyện speaking với chủ đề đã học",
        ],
      },
      {
        day: 2,
        date: "Thứ Ba, 25/11/2025",
        lesson: ["Viết (Writing) + Nói (Speaking)", "Học 4 topic tiếp theo của speaking IELTS task 1"],
        practice: [
          "Kết hợp 4 kỹ năng",
          "Làm 1 test Reading (Đọc) và Listening (Nghe) trong IELTS Cambridge 9",
          "Tự luyện writing cả 2 task với đề thi thật",
        ],
      },
      {
        day: 3,
        date: "Thứ Tư, 26/11/2025",
        lesson: [
          "Nói (Speaking)",
          "Học 2 topic đầu tiên của speaking part 3",
          "Học 3 topic/file nghe tùy chọn của speaking task 2",
        ],
        practice: [
          "4 kỹ năng trong IELTS Nghe, Nói, Đọc, Viết",
          "Làm 1 test Reading và Listening trong IELTS Cambridge 10",
          "Tự luyện Writing cả 2 task với đề thi thật",
          "Tự luyện Speaking với chủ đề đã học",
        ],
      },
      {
        day: 4,
        date: "Thứ Năm, 27/11/2025",
        lesson: ["Nói (Speaking)", "Học 3 topic tiếp theo của speaking task 3"],
        practice: [
          "Kết hợp 4 kỹ năng trong IELTS",
          "Làm 1 test Reading và Listening trong IELTS Cambridge 10",
          "Tự luyện writing cả 2 task với đề thi thật",
          "Ôn tập các topic speaking còn yếu trong quá trình học",
        ],
      },
      {
        day: 5,
        date: "Thứ Sáu, 28/11/2025",
        lesson: ["Speaking", "Học 2 topic còn lại của speaking task 3"],
        practice: [
          "Reading + Listening + Writing + Speaking",
          "Làm 1 test Reading và Listening trong IELTS Cambridge 10",
          "Tự luyện writing cả 2 task với đề thi thật",
          "Ôn tập các topic speaking còn yếu trong quá trình học",
        ],
      },
      {
        day: 6,
        date: "Thứ Bảy, 29/11/2025",
        lesson: [],
        practice: [
          "Tập trung luyện tập cả 4 kỹ năng để chuẩn bị cho kỳ thi",
          "Làm 1 test Reading và Listening trong IELTS Cambridge 10",
          "Tự luyện writing cả 2 task với đề thi thật",
          "Ôn tập các topic speaking còn yếu trong quá trình học",
        ],
      },
    ],
  },
];
