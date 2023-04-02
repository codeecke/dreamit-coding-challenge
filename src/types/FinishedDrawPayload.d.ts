import type { DrawnNumbers } from "@/types/DrawnNumbers";
import type { LotteryId } from "@/api/types/LotteryId.d";

export type FinishedDrawPayload = {
    addOns: string;
    drawDate: string;
    drawnNumbers: DrawnNumbers[];
    id: string;
    lotteryId: LotteryId;
}