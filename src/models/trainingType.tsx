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
	id: string;
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
export interface trainingEmptySetType {
	_id?: string;
	user?: string;
	trainingName: string;
	exercise: any[];
}
export interface trainingSetType {
	id?: string;
	_id?: string;
	user?: string;
	trainingName: string;
	exercise: TabelElementType[][];
}

export interface trainingSetTypeWithID {
	id?: string;
	_id?: string;
	user?: string;
	trainingName?: string;
	exercise?: TabelElementType[][];
}
