import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		// <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		// 	<Sidebar className='sm:w-1/4'/>
		// 	<MessageContainer className='sm:w-3/4' />
		// </div>
		<div className='flex flex-col sm:flex-row gap-10 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		<Sidebar />
		<MessageContainer />
	</div>
	);
};
export default Home;
// Home.jsx
// import MessageContainer from "../../components/messages/MessageContainer";
// import Sidebar from "../../components/sidebar/Sidebar";
// import useConversation from "../../zustand/useConversation";


// const Home = () => {
// 	const { selectedConversation } = useConversation();

// 	return (
// 		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 			<Sidebar />
// 			{selectedConversation ? <MessageContainer /> : null}
// 		</div>
// 	);
// };
// export default Home;
