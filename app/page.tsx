import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";

export default function Home() {
  const currentYear: number = new Date().getFullYear();

  const startOfYear: Date = new Date(currentYear, 0, 1);
  const endOfYear: Date = new Date(currentYear + 1, 0, 1);
  const now: Date = new Date();
  const progress: number =
    ((now.getTime() - startOfYear.getTime()) /
      (endOfYear.getTime() - startOfYear.getTime())) *
    100;

  const currentDateText: string = format(new Date(), "eeee, MMMM do");

  return (
    <div className="flex flex-col h-screen relative bg-gray-50 dark:bg-gray-950">
      <nav className="px-4 py-4">
        <div className="mx-auto">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            TimeNarrator
          </h1>
        </div>
      </nav>

      <div className="absolute w-full top-1/3 px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          {currentYear}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {currentDateText}
        </p>
      </div>

      <div className="flex flex-1 justify-center items-center px-4">
        <div className="w-full max-w-xl mx-auto">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress className="h-4" value={progress} />
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>
                <p>
                  {progress.toFixed(2)}%
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
