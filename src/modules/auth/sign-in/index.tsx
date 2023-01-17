import { useLocales } from '~/hooks';

export default function SignIn() {
  const { allLang, translate, onChangeLang } = useLocales();

  return (
    <div>
      <span>{translate('demo.title')}</span>

      {allLang.map((option) => (
        <button
          key={option.value}
          onClick={() => {
            onChangeLang(option.value);
          }}
        >
          <img alt={option.label} src={option.icon} />

          {option.label}
        </button>
      ))}
    </div>
  );
}
