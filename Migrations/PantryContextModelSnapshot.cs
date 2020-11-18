﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ThePantry.Data;

namespace ThePantry.Migrations
{
    [DbContext(typeof(PantryContext))]
    partial class PantryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("ThePantry.Data.Entities.Ingredient", b =>
                {
                    b.Property<int>("IngredientId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("MealIngredientId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PantryIngredientId")
                        .HasColumnType("int");

                    b.HasKey("IngredientId");

                    b.ToTable("Ingredients");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Meal", b =>
                {
                    b.Property<int>("MealId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Instructions")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("MealId");

                    b.HasIndex("UserId");

                    b.ToTable("Meals");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.MealIngredient", b =>
                {
                    b.Property<int>("MealIngredientId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("IngredientForeignKey")
                        .HasColumnType("int");

                    b.Property<int?>("MealId")
                        .HasColumnType("int");

                    b.Property<decimal>("Quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("UnitForeignKey")
                        .HasColumnType("int");

                    b.HasKey("MealIngredientId");

                    b.HasIndex("IngredientForeignKey")
                        .IsUnique()
                        .HasFilter("[IngredientForeignKey] IS NOT NULL");

                    b.HasIndex("MealId");

                    b.HasIndex("UnitForeignKey")
                        .IsUnique()
                        .HasFilter("[UnitForeignKey] IS NOT NULL");

                    b.ToTable("MealIngredients");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Pantry", b =>
                {
                    b.Property<int>("PantryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("PantryId");

                    b.HasIndex("UserId");

                    b.ToTable("Pantries");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.PantryIngredient", b =>
                {
                    b.Property<int>("PantryIngredientId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("IngredientForeignKey")
                        .HasColumnType("int");

                    b.Property<int?>("PantryId")
                        .HasColumnType("int");

                    b.Property<decimal>("Quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("UnitForeignKey")
                        .HasColumnType("int");

                    b.HasKey("PantryIngredientId");

                    b.HasIndex("IngredientForeignKey")
                        .IsUnique()
                        .HasFilter("[IngredientForeignKey] IS NOT NULL");

                    b.HasIndex("PantryId");

                    b.HasIndex("UnitForeignKey")
                        .IsUnique()
                        .HasFilter("[UnitForeignKey] IS NOT NULL");

                    b.ToTable("PantryIngredients");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Unit", b =>
                {
                    b.Property<int>("UnitId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("MealIngredientId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PantryIngredientId")
                        .HasColumnType("int");

                    b.HasKey("UnitId");

                    b.ToTable("Units");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Meal", b =>
                {
                    b.HasOne("ThePantry.Data.Entities.User", "User")
                        .WithMany("Meals")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.MealIngredient", b =>
                {
                    b.HasOne("ThePantry.Data.Entities.Ingredient", "Ingredient")
                        .WithOne("MealIngredient")
                        .HasForeignKey("ThePantry.Data.Entities.MealIngredient", "IngredientForeignKey");

                    b.HasOne("ThePantry.Data.Entities.Meal", "Meal")
                        .WithMany("MealIngredients")
                        .HasForeignKey("MealId");

                    b.HasOne("ThePantry.Data.Entities.Unit", "Unit")
                        .WithOne("MealIngredient")
                        .HasForeignKey("ThePantry.Data.Entities.MealIngredient", "UnitForeignKey");

                    b.Navigation("Ingredient");

                    b.Navigation("Meal");

                    b.Navigation("Unit");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Pantry", b =>
                {
                    b.HasOne("ThePantry.Data.Entities.User", "User")
                        .WithMany("Pantries")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.PantryIngredient", b =>
                {
                    b.HasOne("ThePantry.Data.Entities.Ingredient", "Ingredient")
                        .WithOne("PantryIngredient")
                        .HasForeignKey("ThePantry.Data.Entities.PantryIngredient", "IngredientForeignKey");

                    b.HasOne("ThePantry.Data.Entities.Pantry", "Pantry")
                        .WithMany("PantryIngredients")
                        .HasForeignKey("PantryId");

                    b.HasOne("ThePantry.Data.Entities.Unit", "Unit")
                        .WithOne("PantryIngredient")
                        .HasForeignKey("ThePantry.Data.Entities.PantryIngredient", "UnitForeignKey");

                    b.Navigation("Ingredient");

                    b.Navigation("Pantry");

                    b.Navigation("Unit");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Ingredient", b =>
                {
                    b.Navigation("MealIngredient");

                    b.Navigation("PantryIngredient");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Meal", b =>
                {
                    b.Navigation("MealIngredients");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Pantry", b =>
                {
                    b.Navigation("PantryIngredients");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Unit", b =>
                {
                    b.Navigation("MealIngredient");

                    b.Navigation("PantryIngredient");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.User", b =>
                {
                    b.Navigation("Meals");

                    b.Navigation("Pantries");
                });
#pragma warning restore 612, 618
        }
    }
}
