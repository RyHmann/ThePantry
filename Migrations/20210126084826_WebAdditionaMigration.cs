using Microsoft.EntityFrameworkCore.Migrations;

namespace ThePantry.Migrations
{
    public partial class WebAdditionaMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Editable",
                table: "Meals",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Thumbnail",
                table: "Meals",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "URL",
                table: "Meals",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Editable",
                table: "Meals");

            migrationBuilder.DropColumn(
                name: "Thumbnail",
                table: "Meals");

            migrationBuilder.DropColumn(
                name: "URL",
                table: "Meals");
        }
    }
}
