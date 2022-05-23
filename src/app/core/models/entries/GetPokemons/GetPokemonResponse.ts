   export interface Pokemon {
        name: string;
        url: string;
    }

    export interface GetPokemonsResponse {
        count: number;
        next: string;
        previous?: any;
        results: Pokemon[];
    }



