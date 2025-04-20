import React from "react";
import { Link } from "react-router-dom";
import ChessHeader from "@/components/ChessHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChevronRight, Medal, Puzzle } from "lucide-react";

const Lessons: React.FC = () => {
  const lessons = [
    {
      id: 1,
      title: "Знакомство с фигурами",
      description: "Изучите как ходят шахматные фигуры",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      level: "Начинающий",
      link: "/strategies/beginners"
    },
    {
      id: 2,
      title: "Дебюты для детей",
      description: "Простые дебюты для начинающих",
      icon: <Puzzle className="h-8 w-8 text-primary" />,
      level: "Начинающий",
      link: "/strategies/openings"
    },
    {
      id: 3,
      title: "Тактики в середине игры",
      description: "Как планировать свои ходы",
      icon: <Medal className="h-8 w-8 text-primary" />,
      level: "Продвинутый",
      link: "/strategies/midgame"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ChessHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Интерактивные уроки</h1>
          <p className="text-lg text-center max-w-2xl">
            Выбери урок и начинай учиться играть в шахматы весело и интересно!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  {lesson.icon}
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {lesson.level}
                  </span>
                </div>
                <CardTitle className="text-xl mt-2">{lesson.title}</CardTitle>
                <CardDescription>{lesson.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to={lesson.link} className="w-full">
                  <Button className="w-full group">
                    Начать урок
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-primary/10 p-6 rounded-xl text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Хочешь больше уроков?</h2>
          <p className="mb-4">Скоро здесь появятся новые интересные уроки. Заходи почаще!</p>
          <Button variant="outline" asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Lessons;
