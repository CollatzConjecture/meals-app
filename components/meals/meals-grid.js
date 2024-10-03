import MealsItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
