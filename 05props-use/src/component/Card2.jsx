
/* eslint-disable @next/next/no-img-element */
export default function Card2({username , infom , img , btntxt}) {
    // console.log("props", props.inform);
    // object= new Obj
     console.log(username);
     
    
  return (
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100  ">
     <img
     src={img}
     alt="card"
     className="w-full h-72 object-cover object-center rounded-t-md"
      />
      

      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
          <p className="text-gray-400">
            {infom}
          </p>
        </div>
        <a href={btntxt}>
            <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          MY Github
        </button>
        </a>
        
      </div>
    </div>
  );
}
