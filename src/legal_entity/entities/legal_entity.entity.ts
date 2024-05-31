import { Commitment } from "src/commitment/entities/commitment.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('legal_entity')
export class LegalEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    totalValue: number;

    @OneToMany(() => Commitment, commitment => commitment.legalEntity)
    commitments: Commitment[];

    constructor(data: Partial<LegalEntity>) {
        Object.assign(this, data);
    }
}
