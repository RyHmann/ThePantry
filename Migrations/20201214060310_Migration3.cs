using Microsoft.EntityFrameworkCore.Migrations;

namespace ThePantry.Migrations
{
    public partial class Migration3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Pantries");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Pantries",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
