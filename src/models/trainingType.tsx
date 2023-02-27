export interface TabelElementType {
	name?: string;
	repeat?: number;
	time?: boolean;
	weight?: number;
	url?: string;
}

export interface trainingEmptyType {
	_id?: string;
	user?: string;
	trainingName: string;
	exercise: any[];
	trainingDate: Date;
	timeStart?: string;
	timeEnd?: string;
	traininglength?: string;
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
export interface trainingSetType {
	_id?: string;
	user?: string;
	trainingName: string;
	exercise: TabelElementType[][];
}

