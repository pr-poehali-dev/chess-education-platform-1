import React from "react";
import { Link } from "react-router-dom";
import ChessHeader from "@/components/ChessHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Crown, Target } from "lucide-react";
import ChessBoard from "@/components/ChessBoard";

const Endgame: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ChessHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/lessons" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к урокам
        </Link>
        
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Эндшпиль: завершение партии</h1>
          <p className="text-lg text-center max-w-2xl mb-8">
            Изучи важные принципы завершающей стадии шахматной партии
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center">
                <Crown className="h-6 w-6 text-primary mr-2" />
                <CardTitle className="text-2xl">Активность короля</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-4">В эндшпиле король становится активной фигурой:</p>
              <ul className="space-y-3 mb-4">
                <li>Выводи короля в центр доски</li>
                <li>Используй короля для атаки пешек противника</li>
                <li>Защищай свои пешки королём</li>
              </ul>
              <div className="p-3 bg-primary/10 rounded-lg mb-4">
                <p className="font-medium">Правило квадрата:</p>
                <p>Если король находится внутри воображаемого квадрата проходной пешки — он может её догнать.</p>
              </div>
              <div className="h-[200px]">
                <ChessBoard position="8/8/8/8/3k4/8/5P2/5K2" />
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center">
                <Target className="h-6 w-6 text-primary mr-2" />
                <CardTitle className="text-2xl">Пешечные эндшпили</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-4">Ключевые концепции пешечных окончаний:</p>
              <ul className="space-y-3 mb-4">
                <li>Создавай проходные пешки</li>
                <li>Помни про оппозицию королей</li>
                <li>Защищай пешки другими пешками</li>
                <li>Используй отдалённые проходные пешки</li>
              </ul>
              <div className="p-3 bg-primary/10 rounded-lg mb-4">
                <p className="font-medium">Важно знать:</p>
                <p>Пешки должны продвигаться вместе, поддерживая друг друга.</p>
              </div>
              <div className="h-[200px]">
                <ChessBoard position="8/5k2/8/8/3P1P2/8/8/3K4" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/strategies/midgame">Предыдущий урок</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Endgame;
