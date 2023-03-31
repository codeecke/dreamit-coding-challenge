import { gql } from "@apollo/client";
import { AbstractService } from "./AbstractService";
import type { DrawHistoryPayload } from '@/services/types/DrawHistoryPayload';
import type { LotteryId } from "./types/LotteryId";

export class HistoryService extends AbstractService {
    async fetch(licensedTerritory: string = 'US-NJ', limit: number = 4, offset: number = 0, lotteries: LotteryId[] = []): Promise<DrawHistoryPayload> {
        const filter = lotteries.length > 0 ? `{lotteries: [${lotteries.join(',')}]}` : '{}'
        const result = await this.client.query({
            query: gql(`{
                drawHistory(filter: ${filter}, licensedTerritory: "${licensedTerritory}", limit: ${limit}, offset: ${offset}) {
                    draws {
                        id
                        addOns
                        drawDate
                        drawnNumbers {
                            numbers {
                                name
                                values
                            }
                        }
                        lotteryId
                    }
                }    
            }`),
        })
        return result?.data?.drawHistory
    }
}