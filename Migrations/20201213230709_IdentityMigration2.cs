using Microsoft.EntityFrameworkCore.Migrations;

namespace ThePantry.Migrations
{
    public partial class IdentityMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Meals_AspNetUsers_UserId1",
                table: "Meals");

            migrationBuilder.DropForeignKey(
                name: "FK_Pantries_AspNetUsers_UserId1",
                table: "Pantries");

            migrationBuilder.DropIndex(
                name: "IX_Pantries_UserId1",
                table: "Pantries");

            migrationBuilder.DropIndex(
                name: "IX_Meals_UserId1",
                table: "Meals");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Pantries");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Meals");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Pantries",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Meals",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Pantries_UserId",
                table: "Pantries",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Meals_UserId",
                table: "Meals",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Meals_AspNetUsers_UserId",
                table: "Meals",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Pantries_AspNetUsers_UserId",
                table: "Pantries",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Meals_AspNetUsers_UserId",
                table: "Meals");

            migrationBuilder.DropForeignKey(
                name: "FK_Pantries_AspNetUsers_UserId",
                table: "Pantries");

            migrationBuilder.DropIndex(
                name: "IX_Pantries_UserId",
                table: "Pantries");

            migrationBuilder.DropIndex(
                name: "IX_Meals_UserId",
                table: "Meals");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Pantries",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Pantries",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Meals",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Meals",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pantries_UserId1",
                table: "Pantries",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Meals_UserId1",
                table: "Meals",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Meals_AspNetUsers_UserId1",
                table: "Meals",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Pantries_AspNetUsers_UserId1",
                table: "Pantries",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
