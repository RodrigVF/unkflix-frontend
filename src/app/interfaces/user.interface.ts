export interface UserLogin {
    email: string;
    password: string;
}

export interface UserResponse {
    token: string;
    user: {
        id: number;
        email: string;
        name: string;
    }
}
