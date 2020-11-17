using Microsoft.EntityFrameworkCore.Migrations;

namespace ThePantry.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Meals",
                columns: table => new
                {
                    MealId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Instructions = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meals", x => x.MealId);
                    table.ForeignKey(
                        name: "FK_Meals_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Pantries",
                columns: table => new
                {
                    PantryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pantries", x => x.PantryId);
                    table.ForeignKey(
                        name: "FK_Pantries_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MealIngredients",
                columns: table => new
                {
                    MealIngredientId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Quantity = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MealId = table.Column<int>(type: "int", nullable: false),
                    PantryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MealIngredients", x => x.MealIngredientId);
                    table.ForeignKey(
                        name: "FK_MealIngredients_Meals_MealId",
                        column: x => x.MealId,
                        principalTable: "Meals",
                        principalColumn: "MealId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MealIngredients_Pantries_PantryId",
                        column: x => x.PantryId,
                        principalTable: "Pantries",
                        principalColumn: "PantryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PantryIngredients",
                columns: table => new
                {
                    PantryIngredientId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Quantity = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PantryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PantryIngredients", x => x.PantryIngredientId);
                    table.ForeignKey(
                        name: "FK_PantryIngredients_Pantries_PantryId",
                        column: x => x.PantryId,
                        principalTable: "Pantries",
                        principalColumn: "PantryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Ingredients",
                columns: table => new
                {
                    IngredientId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MealIngredientId = table.Column<int>(type: "int", nullable: true),
                    PantryIngredientId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingredients", x => x.IngredientId);
                    table.ForeignKey(
                        name: "FK_Ingredients_MealIngredients_MealIngredientId",
                        column: x => x.MealIngredientId,
                        principalTable: "MealIngredients",
                        principalColumn: "MealIngredientId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ingredients_PantryIngredients_PantryIngredientId",
                        column: x => x.PantryIngredientId,
                        principalTable: "PantryIngredients",
                        principalColumn: "PantryIngredientId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Units",
                columns: table => new
                {
                    UnitId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MealIngredientId = table.Column<int>(type: "int", nullable: true),
                    PantryIngredientId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Units", x => x.UnitId);
                    table.ForeignKey(
                        name: "FK_Units_MealIngredients_MealIngredientId",
                        column: x => x.MealIngredientId,
                        principalTable: "MealIngredients",
                        principalColumn: "MealIngredientId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Units_PantryIngredients_PantryIngredientId",
                        column: x => x.PantryIngredientId,
                        principalTable: "PantryIngredients",
                        principalColumn: "PantryIngredientId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ingredients_MealIngredientId",
                table: "Ingredients",
                column: "MealIngredientId",
                unique: true,
                filter: "[MealIngredientId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Ingredients_PantryIngredientId",
                table: "Ingredients",
                column: "PantryIngredientId",
                unique: true,
                filter: "[PantryIngredientId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_MealIngredients_MealId",
                table: "MealIngredients",
                column: "MealId");

            migrationBuilder.CreateIndex(
                name: "IX_MealIngredients_PantryId",
                table: "MealIngredients",
                column: "PantryId");

            migrationBuilder.CreateIndex(
                name: "IX_Meals_UserId",
                table: "Meals",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Pantries_UserId",
                table: "Pantries",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_PantryIngredients_PantryId",
                table: "PantryIngredients",
                column: "PantryId");

            migrationBuilder.CreateIndex(
                name: "IX_Units_MealIngredientId",
                table: "Units",
                column: "MealIngredientId",
                unique: true,
                filter: "[MealIngredientId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Units_PantryIngredientId",
                table: "Units",
                column: "PantryIngredientId",
                unique: true,
                filter: "[PantryIngredientId] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ingredients");

            migrationBuilder.DropTable(
                name: "Units");

            migrationBuilder.DropTable(
                name: "MealIngredients");

            migrationBuilder.DropTable(
                name: "PantryIngredients");

            migrationBuilder.DropTable(
                name: "Meals");

            migrationBuilder.DropTable(
                name: "Pantries");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
