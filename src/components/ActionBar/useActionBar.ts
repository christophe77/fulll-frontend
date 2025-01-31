export default function useActionBar() {
	function handleDeployClick() {
		console.log('deploy');
	}
	function handleCopyClick() {
		console.log('copy');
	}
	function handleDeleteClick() {
		console.log('delete');
	}
	return { handleDeployClick, handleCopyClick, handleDeleteClick };
}
