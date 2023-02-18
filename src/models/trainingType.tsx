export interface TabelElementType {
	name?: string ;
	repeat?: number;
	time?: number;
	weight?: number;
}

export interface trainingType {
	exercise: TabelElementType[][];
}
