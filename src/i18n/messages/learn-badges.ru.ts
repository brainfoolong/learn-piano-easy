/** The badges of *Learn Piano* in Russian. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "Обезьяна-учитель радуется за вас",
  fixed: {
    "first-note": { name: "Первая нота", description: "Сыграйте первую ноту в уроке." },
    "first-lesson": { name: "Первый урок", description: "Пройдите первый урок." },
    "first-three-stars": { name: "Три звезды", description: "Пройдите урок на три звезды." },
    "three-stars-ten": { name: "Звездопад", description: "Получите три звезды в десяти уроках." },
    "first-daily-goal": { name: "Цель достигнута", description: "Впервые выполните цель на день." },
    "streak-3": { name: "Три дня подряд", description: "Выполняйте цель на день три дня подряд." },
    "streak-7": { name: "Неделя подряд", description: "Выполняйте цель на день семь дней подряд." },
    "streak-30": { name: "Месяц подряд", description: "Выполняйте цель на день тридцать дней подряд." },
    "streak-100": { name: "Сто дней", description: "Выполняйте цель на день сто дней подряд." },
    "notes-1000": { name: "Тысяча нот", description: "Сыграйте тысячу нот в уроках." },
    "notes-10000": { name: "Десять тысяч нот", description: "Сыграйте десять тысяч нот в уроках." },
    "rhythm-ace": { name: "Чувство ритма", description: "Пройдите ритмический шаг с первой попытки." },
    "sight-reader": { name: "Чтение с листа", description: "Прочитайте десять нот подряд без ошибок." },
    "early-bird": { name: "Ранняя пташка", description: "Пройдите урок до 8:00 утра." },
    "night-owl": { name: "Ночная сова", description: "Пройдите урок в 22:00 или позже." },
    comeback: { name: "С возвращением", description: "Вернитесь к урокам после недели перерыва." },
    legendary: { name: "Сложная песня", description: "Сыграйте до конца сложную версию одной из наших песен в разделе «Просто играть»." },
  },
  world: {
    name: (world: string) => `Мир «${world}» покорён`,
    description: (world: string) => `Пройдите финальное испытание мира «${world}».`,
  },
};
