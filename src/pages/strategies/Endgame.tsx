import React from "react";
import { Link } from "react-router-dom";
import ChessHeader from "@/components/ChessHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Crown, Target } from "lucide-react";
import { ChessBoard } from "@/components/ChessBoard";

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
          <h1 className="text-4xl font-bold text-primary mb-4">Эндшпиль: окончание партии</h1>
          <p className="text-lg text-center max-w-2xl mb-8">
            Научись завершать шахматную партию и доводить преимущество до победы!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center">
                <Crown className="h-6 w-6 text-primary mr-2" />
                <CardTitle className="text-2xl">Активность короля</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">В эндшпиле король становится боевой фигурой:</p>
                  <ul className="space-y-2 list-disc ml-5">
                    <li>Выводи короля в центр</li>
                    <li>Используй короля для поддержки проходных пешек</li>
                    <li>Атакуй пешки противника королем</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p>Правило: В эндшпиле активный король - ключ к победе!</p>
                  </div>
                </div>
                <div className="h-[200px]">
                  <ChessBoard position="8/8/8/3k4/8/8/3K4/8" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center">
                <Target className="h-6 w-6 text-primary mr-2" />
                <CardTitle className="text-2xl">Проходные пешки</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">Пешка, которой ничто не мешает дойти до последней горизонтали:</p>
                  <ul className="space-y-2 list-disc ml-5">
                    <li>Создавай проходные пешки</li>
                    <li>Защищай свои проходные пешки</li>
                    <li>Блокируй проходные пешки противника</li>
                    <li>Используй "правило квадрата"</li>
                  </ul>
                </div>
                <div className="h-[200px]">
                  <ChessBoard position="8/8/8/1P6/8/8/8/k6K" />
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p>Запомни: Проходная пешка должна двигаться вперёд!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-3">Базовые окончания</h2>
          <p className="mb-4">Научись матовать одинокого короля разными фигурами:</p>
          <ul className="text-left list-disc ml-8 mb-4">
            <li>Ферзём и королём</li>
            <li>Ладьёй и королём</li>
            <li>Двумя слонами и королём</li>
          </ul>
          <p>Эти навыки - основа шахматного мастерства!</p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="outline" asChild>
            <Link to="/strategies/midgame">Предыдущий урок</Link>
          </Button>
          <Button asChild>
            <Link to="/lessons">Вернуться к урокам</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Endgame;
