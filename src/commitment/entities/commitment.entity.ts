import { Fund } from "src/fund/entities/fund.entity";
import { LegalEntity } from "src/legal_entity/entities/legal_entity.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('commitment')
export class Commitment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => LegalEntity, legalEntity => legalEntity.commitments)
    legalEntity: LegalEntity;
    
    @Column()
    legalEntityId: number;

    @ManyToOne(() => Fund, fund => fund.commitments)
    fund: Fund;

    @Column()
    fundId: number;

    @Column()
    amount: number;

    @Column()
    status: string;

    constructor(data: Partial<Commitment>) {
        Object.assign(this, data);
    }
}
