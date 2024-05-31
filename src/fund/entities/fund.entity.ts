import { Commitment } from 'src/commitment/entities/commitment.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Fund {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    status: string;

    @OneToMany(() => Commitment, commitment => commitment.fund)
    commitments: Commitment[];

    constructor(data: Partial<Fund>) {
        Object.assign(this, data);
    }
}