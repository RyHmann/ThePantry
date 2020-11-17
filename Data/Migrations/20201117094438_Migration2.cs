using Microsoft.EntityFrameworkCore.Migrations;

namespace ThePantry.Migrations
{
    public partial class Migration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MealIngredients_Meals_MealId",
                table: "MealIngredients");

            migrationBuilder.AlterColumn<int>(
                name: "MealId",
                table: "MealIngredients",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MealIngredients_Meals_MealId",
                table: "MealIngredients",
                column: "MealId",
                principalTable: "Meals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MealIngredients_Meals_MealId",
                table: "MealIngredients");

            migrationBuilder.AlterColumn<int>(
                name: "MealId",
                table: "MealIngredients",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_MealIngredients_Meals_MealId",
                table: "MealIngredients",
                column: "MealId",
                principalTable: "Meals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
