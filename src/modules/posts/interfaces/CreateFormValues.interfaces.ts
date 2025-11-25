export interface CreateFormValues {
   title?: string;
   body?: string;
   images?: string[];
   video?: string;
}

export interface CreateFormBody extends CreateFormValues {
   userId: number;
}
