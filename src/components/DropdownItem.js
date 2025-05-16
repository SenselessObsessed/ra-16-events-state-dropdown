function DropdownItem({ item }) {
	return (
		<li>
			<a
				href='#'
				onMouseEnter={e => {
					e.target.closest('li').classList.add('active');
				}}
				onMouseLeave={e => {
					e.target.closest('li').removeAttribute('class');
				}}
			>
				{item}
			</a>
		</li>
	);
}

export default DropdownItem;
