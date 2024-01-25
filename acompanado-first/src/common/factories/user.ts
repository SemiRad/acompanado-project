import type User from "@/common/interfaces/IUser";

export function createUser (data: User): User {
    const { id, name, username, email, phone, website } = data;
    return { id, name, username, email, phone, website }
}