import { User } from "@/Users/domain";
import { UserPersistence } from "@/Users/infrastructure/Users.persistence";

export function UserPersistenceToDomain(
	UserPersistence: UserPersistence
): User {
	return new User({
		id: UserPersistence.id,
		firstName: UserPersistence.firstName,
		lastName: UserPersistence.lastName,
		email: UserPersistence.email,
		password: UserPersistence.password,
		refreshToken: UserPersistence.refreshToken,
	});
}
