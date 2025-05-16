import DropdownItem from './DropdownItem';

function DropdownList() {
	const data = [
		'Profile Information',
		'Change Password',
		'Become PRO',
		'Help',
		'Log Out',
	];

	return (
		<ul className='dropdown'>
			{data.map((item, idx) => {
				return <DropdownItem item={item} key={idx} />;
			})}
		</ul>
	);
}

export default DropdownList;
