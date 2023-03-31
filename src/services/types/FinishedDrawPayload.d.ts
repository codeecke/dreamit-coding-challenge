import type { DrawnNumbers } from "@/services/types/DrawnNumbers";
import type { LotteryId } from "@/api/types/LotteryId.d";

export type FinishedDrawPayload = {
    addOns: string;
    drawDate: Intl.DateTimeFormat;
    drawnNumbers: DrawnNumbers[];
    id: string;
    lotteryId: LotteryId;
}