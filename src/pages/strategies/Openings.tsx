import React from "react";
import { Link } from "react-router-dom";
import ChessHeader from "@/components/ChessHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ChessPiece } from "lucide-react";
import { ChessBoard } from "@/components/ChessBoard";

const Openings: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ChessHeader />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/lessons" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к урокам
        </Link>
        
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Дебюты в шахматах</h1>
          <p className="text-lg text-center max-w-2xl mb-8">
            Изучи популярные начала партий, которые помогут тебе хорошо стартовать в игре!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl">Итальянская партия</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">Один из самых популярных дебютов для начинающих:</p>
                  <ol className="list-decimal ml-5 space-y-2">
                    <li>e4 e5</li>
                    <li>Кf3 Кc6</li>
                    <li>Сc4 (нацеливается на слабую точку f7)</li>
                  </ol>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p>Цель: быстрое развитие фигур и контроль центра.</p>
                  </div>
                </div>
                <div className="h-[200px]">
                  <ChessBoard position="r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl">Защита двух коней</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">Активная защита для чёрных:</p>
                  <ol className="list-decimal ml-5 space-y-2">
                    <li>e4 e5</li>
                    <li>Кf3 Кc6</li>
                    <li>Сc4 Кf6 (защита двумя конями)</li>
                  </ol>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p>Чёрные сразу атакуют пешку e4 и готовятся к контригре.</p>
                  </div>
                </div>
                <div className="h-[200px]">
                  <ChessBoard position="r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="outline" asChild>
            <Link to="/strategies/beginners">Предыдущий урок</Link>
          </Button>
          <Button asChild>
            <Link to="/strategies/midgame">Следующий урок</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Openings;
