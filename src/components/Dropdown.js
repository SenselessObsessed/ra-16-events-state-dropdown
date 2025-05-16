import DropdownList from './DropdownList';
import { useState } from 'react';

function Dropdown() {
	const [open, setOpen] = useState(true);

	function toggleOpen(event) {
		event.preventDefault();
		event.target.closest('.dropdown-wrapper').classList.toggle('open');
		setOpen(!open);
	}

	return (
		<div className='dropdown-wrapper open'>
			<button className='btn' onClick={toggleOpen}>
				<span>Account Settings</span>
				<i className='material-icons'>public</i>
			</button>
			<DropdownList />
		</div>
	);
}

export default Dropdown;
