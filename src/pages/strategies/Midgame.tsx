import React from "react";
import { Link } from "react-router-dom";
import ChessHeader from "@/components/ChessHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Lightbulb, Zap } from "lucide-react";
import ChessBoard from "@/components/ChessBoard";

const Midgame: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ChessHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/lessons" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к урокам
        </Link>
        
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Миттельшпиль: середина игры</h1>
          <p className="text-lg text-center max-w-2xl mb-8">
            Стратегии и тактики для середины шахматной партии
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center">
                <Zap className="h-6 w-6 text-primary mr-2" />
                <CardTitle className="text-2xl">Тактические приёмы</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-4">
                <li className="border-b pb-3">
                  <p className="font-medium text-lg">Вилка</p>
                  <p>Одна фигура атакует две или больше фигур противника одновременно.</p>
                </li>
                <li className="border-b pb-3">
                  <p className="font-medium text-lg">Связка</p>
                  <p>Фигура не может двигаться, так как открывает более ценную фигуру для атаки.</p>
                </li>
                <li className="border-b pb-3">
                  <p className="font-medium text-lg">Двойной удар</p>
                  <p>Атака двух фигур противника разными своими фигурами в один ход.</p>
                </li>
                <li>
                  <p className="font-medium text-lg">Открытое нападение</p>
                  <p>Ход одной фигурой открывает линию атаки другой фигуры.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center">
                <Lightbulb className="h-6 w-6 text-primary mr-2" />
                <CardTitle className="text-2xl">Стратегические идеи</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3">
                {[
                  "Контролируй открытые линии своими ладьями",
                  "Размещай пешки на полях того же цвета, что и твой слон",
                  "Создавай форпост для коня в центре доски",
                  "Атакуй слабые пешки противника",
                  "Старайся улучшать позиции своих фигур"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="font-medium mb-2">Позиция для изучения:</p>
                <div className="h-[200px]">
                  <ChessBoard position="r3k2r/pp2qppp/2pb1n2/3p4/3P4/2PB1N2/PP2QPPP/R3K2R" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="outline" asChild>
            <Link to="/strategies/openings">Предыдущий урок</Link>
          </Button>
          <Button asChild>
            <Link to="/strategies/endgame">Следующий урок</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Midgame;
