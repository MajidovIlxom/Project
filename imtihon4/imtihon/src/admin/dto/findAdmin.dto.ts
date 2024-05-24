
export enum Role {
    ADMIN = 'admin',
    VENDOR = 'vendor',
}

export class FindAdminDto{
    username?: string;
    email?: string;
    telegram_link?: string;
    role?: Role;
}