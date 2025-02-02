import useUserCard from './useUserCard';
import { GithubUser } from '../../types/github';
import Avatar from '../ui/Avatar/Avatar';
import Button from '../ui/Button/Button';
import Checkbox from '../ui/Checkbox/Checkbox';
import styles from './UserCard.module.css';

interface IUserCardProps {
	user: GithubUser;
}
export default function UserCard({ user }: IUserCardProps) {
	const {
		handleViewProfileClick,
		userNameToDisplay,
		handleUserCardCheckboxClick,
	} = useUserCard();
	return (
		<div className={styles.card}>
			<div className={styles.avatarContainer}>
				<div className={styles.checkbox}>
					<Checkbox
						checked={user.selected || false}
						onClick={() => handleUserCardCheckboxClick(user)}
					/>
				</div>

				<Avatar img={user.avatar_url} />

				<div className={styles.userInfos}>
					<div>{user.id}</div>
					<div>{userNameToDisplay(user.login)}</div>
				</div>

				<Button
					className={styles.buttonViewProfile}
					text={'View profile'}
					onClick={() => handleViewProfileClick(user.html_url)}
				/>
			</div>
		</div>
	);
}
