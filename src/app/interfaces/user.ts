export interface UserResponse {
    message: string;
    user: User
}

export interface User {
    email: string;
    password: string;
}
