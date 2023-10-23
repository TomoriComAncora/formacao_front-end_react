import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Lucas", "Lucas1", "Lucas2"]);

  return (
    <div>
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender