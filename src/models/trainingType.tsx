export interface TabelElementType {
	name?: string;
	repeat?: number;
	time?: number;
	weight?: number;
}

export interface trainingType {
	exercise: TabelElementType[][];
	trainingDate: Date;
	trainingName: string;
	user?: string;
	_id?: string;
}

export interface trainingTypeWithID {
	exercise?: TabelElementType[][];
	id?: string;
	trainingDate?: Date;
	trainingName?: string;
}
