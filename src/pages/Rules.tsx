import ChessHeader from "@/components/ChessHeader";
import { ChessBoard } from "@/components/ChessBoard";
import { ChessPiece } from "@/components/ChessPiece";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Rules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ChessHeader />
      
      <main className="flex-1 container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Правила шахмат</h1>
        
        <Tabs defaultValue="board" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 lg:w-1/2 lg:mx-auto">
            <TabsTrigger value="board">Доска и фигуры</TabsTrigger>
            <TabsTrigger value="moves">Как ходить</TabsTrigger>
            <TabsTrigger value="special">Особые правила</TabsTrigger>
          </TabsList>
          
          <TabsContent value="board" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Шахматная доска</h2>
                <p className="mb-4">Шахматная доска состоит из 64 клеток, расположенных в виде квадрата 8×8. Клетки доски раскрашены в два цвета - светлые и тёмные.</p>
                <p className="mb-4">Горизонтальные ряды клеток называются <strong>горизонталями</strong> и обозначаются цифрами от 1 до 8, начиная с ближней к белым игроку.</p>
                <p className="mb-4">Вертикальные ряды клеток называются <strong>вертикалями</strong> и обозначаются латинскими буквами от a до h, слева направо от белых.</p>
                <p>Косые линии одноцветных полей называются <strong>диагоналями</strong>.</p>
              </div>
              <div className="flex justify-center">
                <ChessBoard position="8/8/8/8/8/8/8/8" className="max-w-xs" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Шахматные фигуры</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center my-2">
                    <ChessPiece piece="pawn" color="white" />
                  </div>
                  <h3 className="font-bold">Пешка</h3>
                  <p className="text-xs text-muted-foreground">8 белых и 8 чёрных</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center my-2">
                    <ChessPiece piece="knight" color="white" />
                  </div>
                  <h3 className="font-bold">Конь</h3>
                  <p className="text-xs text-muted-foreground">2 белых и 2 чёрных</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center my-2">
                    <ChessPiece piece="bishop" color="white" />
                  </div>
                  <h3 className="font-bold">Слон</h3>
                  <p className="text-xs text-muted-foreground">2 белых и 2 чёрных</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center my-2">
                    <ChessPiece piece="rook" color="white" />
                  </div>
                  <h3 className="font-bold">Ладья</h3>
                  <p className="text-xs text-muted-foreground">2 белых и 2 чёрных</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center my-2">
                    <ChessPiece piece="queen" color="white" />
                  </div>
                  <h3 className="font-bold">Ферзь</h3>
                  <p className="text-xs text-muted-foreground">1 белый и 1 чёрный</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center my-2">
                    <ChessPiece piece="king" color="white" />
                  </div>
                  <h3 className="font-bold">Король</h3>
                  <p className="text-xs text-muted-foreground">1 белый и 1 чёрный</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="moves" className="mt-6">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ChessPiece piece="pawn" color="white" className="mr-2" />
                    Как ходит пешка
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Пешка может ходить только вперёд на одну клетку.</li>
                    <li>С начальной позиции пешка может сделать ход на одну или две клетки вперёд.</li>
                    <li>Пешка бьёт наискосок (по диагонали) на одну клетку вперёд.</li>
                    <li>Достигнув последней горизонтали, пешка превращается в любую фигуру (обычно в ферзя).</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ChessBoard position="8/8/8/8/8/8/4P3/8" className="max-w-xs" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ChessPiece piece="knight" color="white" className="mr-2" />
                    Как ходит конь
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Конь ходит буквой "Г" - на две клетки по вертикали или горизонтали и затем на одну клетку перпендикулярно.</li>
                    <li>Конь может перепрыгивать через другие фигуры.</li>
                    <li>Конь - единственная фигура, которая может перепрыгивать через другие фигуры.</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ChessBoard position="8/8/8/8/8/8/8/4N3" className="max-w-xs" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ChessPiece piece="bishop" color="white" className="mr-2" />
                    Как ходит слон
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Слон ходит по диагонали на любое количество клеток.</li>
                    <li>Слон не может перепрыгивать через другие фигуры.</li>
                    <li>Белопольный слон всегда остаётся на белых полях, а чернопольный - на чёрных.</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ChessBoard position="8/8/8/8/8/8/8/3B4" className="max-w-xs" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ChessPiece piece="rook" color="white" className="mr-2" />
                    Как ходит ладья
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ладья ходит по горизонтали или вертикали на любое количество клеток.</li>
                    <li>Ладья не может перепрыгивать через другие фигуры.</li>
                    <li>Ладья участвует в рокировке вместе с королём.</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ChessBoard position="8/8/8/8/8/8/8/4R3" className="max-w-xs" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ChessPiece piece="queen" color="white" className="mr-2" />
                    Как ходит ферзь
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ферзь может ходить по горизонтали, вертикали и диагонали на любое количество клеток.</li>
                    <li>Ферзь не может перепрыгивать через другие фигуры.</li>
                    <li>Ферзь - самая сильная фигура на доске.</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ChessBoard position="8/8/8/8/8/8/8/4Q3" className="max-w-xs" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ChessPiece piece="king" color="white" className="mr-2" />
                    Как ходит король
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Король может ходить на одну клетку в любом направлении.</li>
                    <li>Король не может ходить на клетку, которая находится под ударом вражеской фигуры.</li>
                    <li>Король участвует в рокировке вместе с ладьёй.</li>
                    <li>Цель игры - поставить шах и мат королю соперника.</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ChessBoard position="8/8/8/8/8/8/8/4K3" className="max-w-xs" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="special" className="mt-6">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Рокировка</h2>
                <p className="mb-4">Рокировка - это особый ход, в котором участвуют король и ладья. Это единственный ход, когда можно передвинуть две фигуры за один ход.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Правила рокировки:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Король и ладья не должны двигаться ранее в партии.</li>
                      <li>Между королём и ладьёй не должно быть других фигур.</li>
                      <li>Король не должен находиться под шахом.</li>
                      <li>Король не должен пересекать или заканчивать движение на клетке, которая находится под ударом вражеской фигуры.</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ChessBoard position="r3k2r/8/8/8/8/8/8/R3K2R" className="max-w-xs" />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Взятие на проходе</h2>
                <p className="mb-4">Взятие на проходе (или "en passant") - это особый приём взятия пешки.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Правила взятия на проходе:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Если пешка соперника двигается на две клетки вперёд из начальной позиции, проходя при этом клетку, которая находится под ударом вашей пешки.</li>
                      <li>Вы можете взять эту пешку на следующем ходу, как если бы она передвинулась только на одну клетку.</li>
                      <li>Взятие на проходе возможно только непосредственно после хода соперника пешкой на две клетки.</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ChessBoard position="8/8/8/8/3Pp3/8/8/8" className="max-w-xs" />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Шах, мат и пат</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Шах:</h3>
                    <p className="mb-4">Шах - это ситуация, когда король находится под угрозой взятия. Если вашему королю объявлен шах, вы должны:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Переместить короля на безопасную клетку.</li>
                      <li>Поставить фигуру между королём и атакующей фигурой.</li>
                      <li>Взять атакующую фигуру.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Мат:</h3>
                    <p className="mb-4">Мат - это ситуация, когда королю объявлен шах, и нет законных ходов, чтобы его избежать. Игра заканчивается, и игрок, чей король получил мат, проигрывает.</p>
                    
                    <h3 className="text-xl font-bold mb-2 mt-4">Пат:</h3>
                    <p>Пат - это ситуация, когда у игрока нет законных ходов, но его король не находится под шахом. Игра заканчивается вничью.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-chess-dark text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Шахматы для детей. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Rules;
