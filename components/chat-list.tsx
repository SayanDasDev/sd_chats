import { ChatCard } from "./chat-card";

export default function ChatList() {
  const chatCards = [];

  for (let i = 0; i < 20; i++) {
    chatCards.push(
      <ChatCard
        key={i}
        sender={`Sayan Das`}
        message={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore est
          cum soluta officia ducimus dolorem. Id, illo eum aperiam nobis placeat
          tenetur tempora, blanditiis necessitatibus atque neque iusto! Sequi,
          debitis. Modi repellat mollitia in veniam beatae, non expedita
          adipisci sed assumenda delectus quas omnis enim officiis ea optio quae
          quos vero. Commodi iusto optio id aliquid nostrum tenetur sunt,
          debitis fuga impedit in eligendi, natus reprehenderit quibusdam
          adipisci vero error ipsa eum sequi eius voluptatibus consectetur? Enim
          debitis, placeat facilis sed quod qui adipisci quos eaque laboriosam
          libero consequatur officiis, quis cupiditate voluptatibus. Delectus id
          dolores molestias dolor ipsam dicta earum ut natus fugit perspiciatis?
          Nesciunt ipsam optio repudiandae debitis voluptates deserunt aliquid
          mollitia, perspiciatis amet modi eum inventore laudantium molestias
          quis officiis hic qui voluptate sint nihil veniam, doloribus iusto
          omnis expedita sunt. Doloremque mollitia enim recusandae suscipit cum
          est necessitatibus eum veritatis, eos pariatur iste! Quos provident
          nihil quae aliquam. Obcaecati veritatis molestiae, adipisci ratione
          modi repellat! Deleniti voluptatum a possimus, aspernatur
          perspiciatis, voluptas eos id illo sequi itaque qui molestiae quidem
          rerum dicta nisi sapiente esse nihil, impedit libero odit aut? Non,
          incidunt cumque temporibus ipsum animi a! Saepe magni laudantium
          perspiciatis vitae itaque quia illo reprehenderit.`}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 md:px-6">
      {chatCards}
    </div>
  );
}
