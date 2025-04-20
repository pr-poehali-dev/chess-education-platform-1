import ChessHeader from "@/components/ChessHeader";
import { ChessBoard } from "@/components/ChessBoard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChessPiece } from "@/components/ChessPiece";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ChessHeader />
      
      <main className="flex-1 container mx-auto py-8">
        {/* Главный баннер */}
        <section className="relative rounded-xl overflow-hidden bg-gradient-to-r from-chess-purple to-chess-light p-8 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-4 z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white">Шахматы для детей</h1>
              <p className="text-white/90 text-lg">Увлекательный мир шахмат – изучай правила, стратегии и становись чемпионом!</p>
              <div className="flex space-x-4">
                <Button asChild size="lg" className="bg-white text-chess-purple hover:bg-white/90">
                  <Link to="/lessons">Начать обучение</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/rules">Узнать правила</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <div className="w-64 md:w-80">
                <ChessBoard className="hover:-rotate-2 transition-transform drop-shadow-xl" />
              </div>
            </div>
          </div>
          
          {/* Декоративные элементы */}
          <div className="absolute -right-4 -bottom-4 text-6xl opacity-10 rotate-12">♞</div>
          <div className="absolute left-2 bottom-2 text-7xl opacity-10 -rotate-12">♝</div>
          <div className="absolute right-1/4 top-4 text-5xl opacity-10">♜</div>
        </section>
        
        {/* Карточки разделов */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Изучай шахматы с удовольствием!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 pt-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-chess-light rounded-full flex items-center justify-center mb-4">
                  <ChessPiece piece="pawn" color="black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Правила игры</h3>
                <p className="text-muted-foreground mb-4">Узнай, как ходят фигуры и основные правила шахматной игры.</p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/rules">Узнать правила</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 pt-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-chess-light rounded-full flex items-center justify-center mb-4">
                  <ChessPiece piece="knight" color="black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Стратегии</h3>
                <p className="text-muted-foreground mb-4">Изучи тактики и стратегии, которые помогут тебе побеждать.</p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/strategies/beginners">Изучить стратегии</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 pt-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-chess-light rounded-full flex items-center justify-center mb-4">
                  <ChessPiece piece="queen" color="black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Интерактивные уроки</h3>
                <p className="text-muted-foreground mb-4">Практикуйся с помощью весёлых и познавательных уроков.</p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/lessons">Начать уроки</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Блок про преимущества */}
        <section className="bg-secondary rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Почему шахматы полезны для детей?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex">
              <div className="mr-4 text-chess-purple text-2xl">🧠</div>
              <div>
                <h3 className="font-bold mb-2">Развивают мышление</h3>
                <p className="text-sm text-muted-foreground">Шахматы тренируют логику, память и концентрацию внимания.</p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 text-chess-purple text-2xl">🏆</div>
              <div>
                <h3 className="font-bold mb-2">Учат планированию</h3>
                <p className="text-sm text-muted-foreground">Шахматисты думают наперёд и просчитывают последствия.</p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 text-chess-purple text-2xl">🤝</div>
              <div>
                <h3 className="font-bold mb-2">Воспитывают характер</h3>
                <p className="text-sm text-muted-foreground">Развивают терпение, выдержку и уважение к сопернику.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Готов начать шахматное приключение?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Присоединяйся к тысячам детей, которые уже открыли для себя увлекательный мир шахмат!</p>
          <Button asChild size="lg" className="animate-bounce-slight">
            <Link to="/lessons">Начать прямо сейчас!</Link>
          </Button>
        </section>
      </main>
      
      <footer className="bg-chess-dark text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Шахматы для детей. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
