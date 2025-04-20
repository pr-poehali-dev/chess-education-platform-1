import React from "react";
import { Link } from "react-router-dom";
import ChessHeader from "@/components/ChessHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";

const BeginnerStrategies: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ChessHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/lessons" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к урокам
        </Link>
        
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Стратегии для начинающих</h1>
          <p className="text-lg text-center max-w-2xl mb-8">
            Важные советы, которые помогут тебе начать играть в шахматы правильно!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Основные принципы</h2>
            <ul className="space-y-3">
              {[
                "Контролируй центр доски",
                "Развивай фигуры в начале игры",
                "Обеспечь безопасность короля",
                "Соединяй ладьи"
              ].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="font-medium">Совет дня:</p>
              <p>Старайся не ходить одной и той же фигурой несколько раз в начале игры!</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Чего избегать</h2>
            <ul className="space-y-3">
              {[
                "Не выводи ферзя слишком рано",
                "Не ходи дважды одной фигурой в дебюте",
                "Не жертвуй фигуры без причины",
                "Не забывай о защите своих фигур"
              ].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mr-2 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-red-50 p-4 rounded-lg">
              <p className="font-medium">Важно помнить:</p>
              <p>Каждый ход должен улучшать позицию твоих фигур!</p>
            </div>
          </Card>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="outline" asChild>
            <Link to="/lessons">Вернуться к урокам</Link>
          </Button>
          <Button asChild>
            <Link to="/strategies/openings">Перейти к дебютам</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default BeginnerStrategies;
