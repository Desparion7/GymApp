export interface TabelElementType {
	name?: string;
	repeat?: number;
	time?: number;
	weight?: number;
}

export interface trainingType {
	_id?: string;
	user?: string;
	trainingName: string;
	exercise: TabelElementType[][];
	trainingDate: Date;
	timeStart?: string;
	timeEnd?: string;
	traininglength?: string;
}

export interface trainingTypeWithID {
	id: string;
	trainingName?: string;
	exercise?: TabelElementType[][];
	trainingDate?: Date;
	timeStart?: string;
	timeEnd?: string;
}
