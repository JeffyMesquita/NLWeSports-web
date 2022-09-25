import { useCallback, useEffect, useState } from "react";
import { listGames, Games } from "./services/games/listGames";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

import "./styles/main.css";

import logoImg from "./assets/logo-nlw-esports.svg";

import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";
import { CreateAdModal } from "./components/CreateAdModal";

function App() {
  const [games, setGames] = useState<Games[]>([] as Games[]);

  const loadGamesList = useCallback(async () => {
    const response = await listGames();

    setGames(response.data);
  }, [listGames, setGames]);

  useEffect(() => {
    loadGamesList();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo NLW" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export { App };
