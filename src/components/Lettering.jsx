export default function Lettering(props) {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-[Poppins] font-semibold xl:leading-15 2xl:leading-18">
      {props.text}
    </h1>
  );
}
