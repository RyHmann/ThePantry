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
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("MealIngredientId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("MealIngredientId");

                    b.ToTable("Ingredient");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Meal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Instructions")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Meals");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.MealIngredient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("MealId")
                        .HasColumnType("int");

                    b.Property<decimal>("Quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("ShoppingListId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("MealId");

                    b.HasIndex("ShoppingListId");

                    b.ToTable("Ingredients");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.ShoppingList", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Lists");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Unit", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("MealIngredientId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("MealIngredientId");

                    b.ToTable("Unit");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Ingredient", b =>
                {
                    b.HasOne("ThePantry.Data.Entities.MealIngredient", null)
                        .WithMany("Ingredient")
                        .HasForeignKey("MealIngredientId");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.MealIngredient", b =>
                {
                    b.HasOne("ThePantry.Data.Entities.Meal", null)
                        .WithMany("Ingredients")
                        .HasForeignKey("MealId");

                    b.HasOne("ThePantry.Data.Entities.ShoppingList", null)
                        .WithMany("Ingredients")
                        .HasForeignKey("ShoppingListId");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Unit", b =>
                {
                    b.HasOne("ThePantry.Data.Entities.MealIngredient", null)
                        .WithMany("Unit")
                        .HasForeignKey("MealIngredientId");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.Meal", b =>
                {
                    b.Navigation("Ingredients");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.MealIngredient", b =>
                {
                    b.Navigation("Ingredient");

                    b.Navigation("Unit");
                });

            modelBuilder.Entity("ThePantry.Data.Entities.ShoppingList", b =>
                {
                    b.Navigation("Ingredients");
                });
#pragma warning restore 612, 618
        }
    }
}
